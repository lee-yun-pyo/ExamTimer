import { DBExamInfoType } from "@/types";

const REQUIRE_STORE = "exam";

export async function createExamDB(DBName:string) {
    const db = await new Promise<IDBDatabase>((resolve) => {
        const request = indexedDB.open(DBName);

        const handleUpgrade = (e: IDBVersionChangeEvent) => {
            const { result: db } = e.target as IDBOpenDBRequest;

            const { objectStoreNames } = db;

            if (!objectStoreNames.contains(REQUIRE_STORE)) {
                db.createObjectStore(REQUIRE_STORE, {
                    keyPath: 'id',
                    autoIncrement: true,
                });
            }
        };

        request.onsuccess = (e) => {
            const { result: db } = e.target as IDBOpenDBRequest;

            const { objectStoreNames } = db;

            if (!objectStoreNames.contains(REQUIRE_STORE)) {
                db.close();
                indexedDB.open(DBName, db.version + 1).onupgradeneeded = handleUpgrade;

                return;
            }

            return resolve(db);
        };

        request.onupgradeneeded = handleUpgrade;
    });

    const getStores = (
        storeName: string,
        mode: IDBTransactionMode | undefined,
    ) => {
        try {
            const transaction = db.transaction(storeName, mode);
            return {
                transaction,
                store: transaction.objectStore(storeName),
            };
        } catch {
            throw new Error(`storeName: ${storeName}가 존재하지 않습니다.`)
        }
    };

    return {
        createExamData: (examInfo: DBExamInfoType) => {
            const {
                transaction,
                store,
            } = getStores(REQUIRE_STORE, 'readwrite');

            return new Promise<{
                examInfo:DBExamInfoType
            }>((resolve) => {
                store.add(examInfo);
                
                transaction.oncomplete = () => 
                    resolve({
                        examInfo
                    });
            });
        },
        getAllExamData: () => {
            const {
                transaction,
                store,
            } = getStores(REQUIRE_STORE, "readonly");

            return new Promise<{
                examList: DBExamInfoType[]
            }>((resolve) => {
                let examList: DBExamInfoType[]

                store.getAll().onsuccess = (e) => {
                    examList = (e.target as IDBRequest).result;
                };

                transaction.oncomplete = () => {
                    resolve({
                        examList
                    });
                };
            });
        },
        getExam: (id: number) => {
            const {
                transaction,
                store,
            } = getStores(REQUIRE_STORE, "readonly");
            let exam: DBExamInfoType;

            return new Promise<{exam: DBExamInfoType}>((resolve) => {
                store.get(id).onsuccess = (e) => {
                    exam = (e.target as IDBRequest).result;
                }

                transaction.oncomplete = () => {
                    resolve({exam});
                }
            });
        },
        deleteExam: (id: number) => {
            const {
                transaction,
                store,
            } = getStores(REQUIRE_STORE, "readwrite");

            return new Promise<void>((resolve) => {
                store.delete(id);

                transaction.oncomplete = () => resolve();
            })
        },
    };
}
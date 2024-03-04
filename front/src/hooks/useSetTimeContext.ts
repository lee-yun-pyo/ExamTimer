import { useContext } from "react";

import { SetTimeContext } from "@/components/common/SetTimeProvider";

export function useSetTimeContext() {
    return useContext(SetTimeContext)
}
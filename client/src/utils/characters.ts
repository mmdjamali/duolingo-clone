export const colors : {
    [name : string] : {
        background : {[i : string] : string},
        border : {[i : string] : string},
        text : {[i : string] : string},
    }
} = {
    "MmD" : {
        background : {
            "100" : "bg-violet-100",
            "200" : "bg-violet-200",
            "300" : "bg-violet-300",
            "400" : "bg-violet-400",
            "500" : "bg-violet-500",
            "600" : "bg-violet-600",
            "700" : "bg-violet-700",
        },
        border : {
            "100" : "border-violet-100",
            "200" : "border-violet-200",
            "300" : "border-violet-300",
            "400" : "border-violet-400",
            "500" : "border-violet-500",
            "600" : "border-violet-600",
            "700" : "border-violet-700",
        },
        text : {
            "100" : "text-violet-100",
            "200" : "text-violet-200",
            "300" : "text-violet-300",
            "400" : "text-violet-400",
            "500" : "text-violet-500",
            "600" : "text-violet-600",
            "700" : "text-violet-700",
        },
    },
    "Semih" : {
        background : {
            "100" : "bg-green-100",
            "200" : "bg-green-200",
            "300" : "bg-green-300",
            "400" : "bg-green-400",
            "500" : "bg-green-500",
            "600" : "bg-green-600",
            "700" : "bg-green-700",
        },
        border : {
            "100" : "border-green-100",
            "200" : "border-green-200",
            "300" : "border-green-300",
            "400" : "border-green-400",
            "500" : "border-green-500",
            "600" : "border-green-600",
            "700" : "border-green-700",
        },
        text : {
            "100" : "text-green-100",
            "200" : "text-green-200",
            "300" : "text-green-300",
            "400" : "text-green-400",
            "500" : "text-green-500",
            "600" : "text-green-600",
            "700" : "text-green-700",
        },
    },
    "King" : {
        background : {
            "100" : "bg-rose-100",
            "200" : "bg-rose-200",
            "300" : "bg-rose-300",
            "400" : "bg-rose-400",
            "500" : "bg-rose-500",
            "600" : "bg-rose-600",
            "700" : "bg-rose-700",
        },
        border : {
            "100" : "border-rose-100",
            "200" : "border-rose-200",
            "300" : "border-rose-300",
            "400" : "border-rose-400",
            "500" : "border-rose-500",
            "600" : "border-rose-600",
            "700" : "border-rose-700",
        },
        text : {
            "100" : "text-rose-100",
            "200" : "text-rose-200",
            "300" : "text-rose-300",
            "400" : "text-rose-400",
            "500" : "text-rose-500",
            "600" : "text-rose-600",
            "700" : "text-rose-700",
        },
    },
    "blank" : {
        background : {
            "100" : "bg-neutral-100",
            "200" : "bg-neutral-200",
            "300" : "bg-neutral-300",
            "400" : "bg-neutral-400",
            "500" : "bg-neutral-500",
            "600" : "bg-neutral-600",
            "700" : "bg-neutral-700",
        },
        border : {
            "100" : "border-neutral-100",
            "200" : "border-neutral-200",
            "300" : "border-neutral-300",
            "400" : "border-neutral-400",
            "500" : "border-neutral-500",
            "600" : "border-neutral-600",
            "700" : "border-neutral-700",
        },
        text : {
            "100" : "text-neutral-100",
            "200" : "text-neutral-200",
            "300" : "text-neutral-300",
            "400" : "text-neutral-400",
            "500" : "text-neutral-500",
            "600" : "text-neutral-600",
            "700" : "text-neutral-700",
        },
    },
}

export const transforms : {
    [name : string] : string[]
} = {
    "MmD" : [
        "0",
        "35",
        "65",
        "50",
        "0",
        "-35",
        "-50",
        "-35",
        "-5",
        "0",
    ],
    "Semih" : [
        "0",
        "-35",
        "-65",
        "-50",
        "0",
        "35",
        "50",
        "35",
        "5",
        "0",
    ],
    "King" : [
        "0",
        "35",
        "65",
        "50",
        "0",
        "-35",
        "-50",
        "-35",
        "-5",
        "0",
    ],
    "blank" : [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
    ],
}
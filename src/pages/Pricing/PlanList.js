import { School } from "@mui/icons-material"

export const CleanerPlans = [
    {
        id: "Cleaner-OneTime",
        planName: "One Time",
        price: "From $16/hr"
    },
    {
        id: "Cleaner-Monthly",
        planName: "Monthly Cleaning"
    },
    {
        id: "Cleaner-Weekly",
        planName: "Weekly Cleaning"
    }
]

export const TutorPlans = [
    {
        id: "Tutor-OneTime",
        planName: "One Time",
        icon: <School sx={{ fontSize: "48px", paddingTop: "8px" }}
        />,
        backgroundColor: "var(--md-sys-color-tertiary-container)"
    },
    {
        id: "Tutor-Weekly",
        planName: "Weekly",
        backgroundColor: "var(--md-sys-color-tertiary-container)"
    }
]
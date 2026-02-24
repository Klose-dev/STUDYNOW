import { memo } from "react"
import "../Style/OwnerFooter.css"

function OwnerFooter() {
    return (
        <footer className='owner-text bottom-sub-container'>
            Developed by <a target="_blank" href="https://github.com" style={{ color: "var(--accentColor)", fontWeight: "bold" }}>Klose</a> || STUDYNOW &copy; 2026 || All Rights Reserved
        </footer>
    )
}

export default memo(OwnerFooter)
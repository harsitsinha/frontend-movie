import "./Header.css"
export const Header = () => {
    return (
        <div>
            <span onClick={()=> window.scroll(0,0)} className = "header"> Entertainment Hub</span>
        </div>
    )
}

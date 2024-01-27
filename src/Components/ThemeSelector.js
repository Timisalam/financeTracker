import './ThemeSelector.css'
import modeIcon from '../assets/mode-icon.svg'
import { useThemeContext } from '../hooks/useThemeContext';
const themeColors = ['#58249c', '#249c6b','#b70233']


export default function ThemeSelector() {
    const {changeColour, changeMode, mode} = useThemeContext()
    
    const toggleMode = () =>{
        changeMode(mode === 'dark'? 'light' : 'dark')
    }

    console.log(mode)
    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                onClick={toggleMode}
                src={modeIcon}
                style={{filter:mode==='dark'? 'invert(100%)':'invert(20%)'}}
                />
            </div>
            <div className='theme-buttons'>
            {themeColors.map(color => (
                <div 
                key= {color}
                onClick={() => changeColour(color)}
                style={{background:color}}
                />     
            ))}
            </div>
        </div>
    );
}

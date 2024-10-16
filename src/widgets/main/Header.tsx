import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Header = () => {

    return(
        <div className="w-full h-[8%] bg-slate-500 text-white flex items-center justify-between px-10">
            <MenuOutlinedIcon/>
            <div className='flex w-[40%] gap-20 items-center justify-end'>
                <div className='flex gap-10'>
                    <SettingsOutlinedIcon/>
                    <DarkModeOutlinedIcon/>
                </div>
                <div className='flex items-end flex-col'>
                    <p className='text-sm'>Пучкова Елена Николаевна</p>
                    <p className='text-xs'>К.Волжский</p>
                </div>
                <LogoutOutlinedIcon/>
            </div>
        </div>
    )

}

export default Header
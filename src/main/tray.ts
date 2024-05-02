import { Menu, Tray, shell } from "electron"
import path from "path"

const createTray = () => {
    const tray = new Tray(
        path.resolve(__dirname, process.platform === 'darwin' ? '../../resources/macTemplate@2x.png' : '../../resources/winTemplate.png')
    )
    const contextMenu = Menu.buildFromTemplate([
        { label: '官网', click: () => shell.openExternal('https://github.com/Zephyr-Zhang99/desktop-camera') },
        { label: '退出', role: 'quit' },
    ]
    )
    tray.setToolTip('桌面摄像头')
    tray.setContextMenu(contextMenu)
}

export default createTray

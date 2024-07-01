import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sideBar"
import { Outlet } from 'react-router-dom';
import AudioPlayer from "./audioPlayer";


export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <Sidebar />
            <main id ="mainArticle">
                <Outlet />
            </main>
       
            <Footer />
        </div>
    )
}
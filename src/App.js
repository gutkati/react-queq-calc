import styles from './App.module.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;

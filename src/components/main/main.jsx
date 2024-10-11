import React, {useState} from 'react';
import styles from './Main.module.css'
import Input from "../input/input";
import Button from "../button/button";
import Solution from "../solution/solution";

const Main = () => {

    const [openSolution, setOpenSolution] = useState(false)

    function showSolution() {
        setOpenSolution(true)
    }

    return (
        <div className={styles.main}>
            <div className={styles.box__title}>
                <h2 className={styles.title}><em>ax<sup>2</sup> + bx + c = 0</em></h2>
            </div>
            <div className={styles.box__input}>
                <Input
                    type='number'
                    info='a'
                    text='a'
                />
                <Input
                    type='number'
                    info='b'
                    text='b'
                />
                <Input
                    type='number'
                    info='c'
                    text='c'
                />
                <Button
                    text='Решение'
                    name='дискриминант'
                    isOpen={showSolution}
                />
                <Button
                    text='Решение'
                    name='теорема Виета'
                    isOpen={showSolution}
                />
            </div>

            <Solution
                openSolution={openSolution}
            />

        </div>
    );
};

export default Main;
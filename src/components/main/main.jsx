import React, {useState} from 'react';
import styles from './Main.module.css'
import Input from "../input/input";
import Button from "../button/button";
import Solution from "../solution/solution";

const Main = () => {

    const [openSolution, setOpenSolution] = useState(false)
    const [inputA, setInputA] = useState('')
    const [inputB, setInputB] = useState('')
    const [inputC, setInputC] = useState('')

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const onInputAChange = (e) => setInputA(e.target.value)
    const onInputBChange = (e) => setInputB(e.target.value)
    const onInputCChange = (e) => setInputC(e.target.value)

    function showSolution() {
        if (+inputA === 0) {
            setErrorMessage(<p className={styles.error}>Коэффициент "а" не может быть равным 0!
                Уравнение не является квадратным!</p>)

        } else if (inputA !== '' && inputB!== '' && inputC !== '') {
            setOpenSolution(true)
            setA(inputA)
            setB(inputB)
            setC(inputC)
            setErrorMessage('')
        } else {
            setErrorMessage(<p className={styles.error}>Заполните все поля!</p>)
        }
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
                    value={inputA}
                    onChange={onInputAChange}
                />
                <Input
                    type='number'
                    info='b'
                    text='b'
                    value={inputB}
                    onChange={onInputBChange}
                />
                <Input
                    type='number'
                    info='c'
                    text='c'
                    value={inputC}
                    onChange={onInputCChange}
                />
                {errorMessage}
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
                a={a}
                b={b}
                c={c}
            />

        </div>
    );
};

export default Main;
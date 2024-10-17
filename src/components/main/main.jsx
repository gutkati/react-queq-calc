import React, {useState} from 'react';
import styles from './Main.module.css'
import Input from "../input/input";
import Button from "../button/button";
import SolutionDisc from "../solutionDisc/solutionDisc";
import SolutionVi from "../solutionVi/solutionVi";

const Main = () => {

    const [openSolutionDisc, setOpenSolutionDisc] = useState(false)
    const [openSolutionVi, setOpenSolutionVi] = useState(false)
    const [inputA, setInputA] = useState(getSaveData('inputA') || '')
    const [inputB, setInputB] = useState(getSaveData('inputB') || '')
    const [inputC, setInputC] = useState(getSaveData('inputC') || '')

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')

    let aNum = parseFloat(inputA)
    let bNum = parseFloat(inputB)
    let cNum = parseFloat(inputC)

    const [errorMessage, setErrorMessage] = useState('')

    const onInputAChange = (e) => {
        setInputA(e.target.value)
    }

    function handleBlurInputA() {
        if (inputA == 0) {
            setErrorMessage(<p className={styles.error}>Коэффициент "а" не может быть равным 0!
                Уравнение не является квадратным!</p>)
        } else {
            setInputA(inputA)
            setErrorMessage('')
            saveDataStorage('inputA', inputA)
        }
    }

    const onInputBChange = (e) => {
        setInputB(e.target.value)
        saveDataStorage('inputB', e.target.value)
    }
    const onInputCChange = (e) => {
        setInputC(e.target.value)
        saveDataStorage('inputC', e.target.value)
    }

    function showSolutionDisc() {
        setOpenSolutionVi(false)
        if (+inputA === 0) {
            setErrorMessage(<p className={styles.error}>Коэффициент "а" не может быть равным 0!
                Уравнение не является квадратным!</p>)

        } else if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
            setErrorMessage(<p className={styles.error}>Заполните все поля!</p>)
        } else {
            setOpenSolutionDisc(true)
            setA(inputA)
            setB(inputB)
            setC(inputC)
            setErrorMessage('')
        }
    }

    function showSolutionVi() {

        if (+inputA === 0) {
            setErrorMessage(<p className={styles.error}>Коэффициент "а" не может быть равным 0!
                Уравнение не является квадратным!</p>)

        } else if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
            setErrorMessage(<p className={styles.error}>Заполните все поля!</p>)
        } else {
            setOpenSolutionDisc(false)
            setOpenSolutionVi(true)
            setA(inputA)
            setB(inputB)
            setC(inputC)
            setErrorMessage('')
        }
    }

    function getSaveData(key) {
        let data = JSON.parse(localStorage.getItem(key))
        return data
    }

    function saveDataStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
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
                    onBlur={handleBlurInputA}
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
                    isOpen={showSolutionDisc}
                />
                <Button
                    text='Решение'
                    name='теорема Виета'
                    isOpen={showSolutionVi}
                />
            </div>

            <SolutionDisc
                title='Решение через Дискриминант'
                a={a}
                b={b}
                c={c}
                openSolution={openSolutionDisc}
            />

            <SolutionVi
                title='Решение по теореме Виета'
                a={a}
                b={b}
                c={c}
                openSolution={openSolutionVi}
            />

        </div>
    );
};

export default Main;
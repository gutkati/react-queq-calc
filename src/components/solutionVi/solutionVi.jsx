import React from 'react';
import SolutionForm from "../solutionForm/solutionForm";
import styles from "../solutionForm/SolutionForm.module.css";
const SolutionVi = ({title, a, b, c, openSolution}) => {

    // значение дискриминанта
    let disc = Math.pow(+b, 2) - (4 * +a * +c)

    let x1 = roundNumber((-b + Math.sqrt(disc)) / (2 * a))
    let x2 = roundNumber((-b - Math.sqrt(disc)) / (2 * a))

    // Проверка по теореме Виета (сумма и произведение)
    const vietaSum = roundNumber(-b / a)
    const vietaProduct = roundNumber(c / a)

    // преобразует отрицательное число в скобки
    const numRes = (num) => num < 0 ? `(${num})` : num

    // преобразует дробное число
    function roundNumber(num) {
        if (Number.isInteger(num)) {
            return num
        } else {
            num = num.toFixed(2)
            return num
        }
    }

    return (
        <SolutionForm title={title} a={a} b={b} c={c} openSolution={openSolution}>
            <div className={styles.box__info}>

                <p>Дискриминант равен:</p>
                <p>
                    <math className={styles.coefficient}>

                        <mi>D</mi>
                        <mo>=</mo>
                        <msup>
                            <mi>b</mi>
                            <mn>2</mn>
                        </msup>
                        <mo>-</mo>
                        <mn>4</mn>
                        <mo>·</mo>
                        <mi>a</mi>
                        <mo>·</mo>
                        <mi>c</mi>
                        <mo>=</mo>
                        <msup>
                            <mn>{numRes(b)}</mn>
                            <mn>2</mn>
                        </msup>
                        <mo>-</mo>
                        <mn>4</mn>
                        <mo>·</mo>
                        <mi>{numRes(a)}</mi>
                        <mo>·</mo>
                        <mi>{numRes(c)}</mi>
                        <mo>=</mo>
                        <mn>{disc}</mn>
                    </math>

                </p>

                {disc >= 0 &&
                <>
                    <p>Сумма корней:&nbsp;
                        <math className={styles.coefficient}>
                            <msub>
                                <mi>x</mi>
                                <mn>1</mn>
                            </msub>
                            <mo>+</mo>
                            <msub>
                                <mi>x</mi>
                                <mn>2</mn>
                            </msub>
                            <mo>=</mo>
                            <mo>-</mo>
                            <mfrac>
                                <mi class={styles.font__size}>b</mi>
                                <mi class={styles.font__size}>a</mi>
                            </mfrac>
                            <mo>=</mo>
                            <mn>{numRes(x1)}</mn>
                            <mo>+</mo>
                            <mn>{numRes(x2)}</mn>
                            <mo>=</mo>
                            <mn>{vietaSum}</mn>
                        </math>
                    </p>

                    <p>Произведение корней:&nbsp;
                        <math className={styles.coefficient}>
                            <msub>
                                <mi>x</mi>
                                <mn>1</mn>
                            </msub>
                            <mo>·</mo>
                            <msub>
                                <mi>x</mi>
                                <mn>2</mn>
                            </msub>
                            <mo>=</mo>

                            <mfrac>
                                <mi class={styles.font__size}>с</mi>
                                <mi class={styles.font__size}>a</mi>
                            </mfrac>
                            <mo>=</mo>
                            <mn>{numRes(x1)}</mn>
                            <mo>·</mo>
                            <mn>{numRes(x2)}</mn>
                            <mo>=</mo>
                            <mn>{vietaProduct}</mn>
                        </math>
                    </p>

                    <p>Корни уравнения:</p>
                    <p>
                        <math className={styles.coefficient}>
                            <msub>
                                <mi>x</mi>
                                <mn>1</mn>
                            </msub>
                            <mo>=</mo>
                            <mn>{x1}</mn>
                        </math>
                   </p>
                    <p>
                        <math className={styles.coefficient}>
                            <msub>
                                <mi>x</mi>
                                <mn>2</mn>
                            </msub>
                            <mo>=</mo>
                            <mn>{x2}</mn>
                        </math>
                   </p>

                </>
                || disc < 0 &&
                <p>Дискриминант D &#60; 0, теорема Виета не применима.</p>
                }
            </div>
        </SolutionForm>
    );
};

export default SolutionVi;
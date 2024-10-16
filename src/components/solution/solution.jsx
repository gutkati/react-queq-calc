import React, {useState} from 'react';
import styles from './Solution.module.css'
import Coefficient1 from "../coefficient1/coefficient1";
import Coefficient2 from "../coefficient2/coefficient2";

const Solution = ({openSolution, a, b, c}) => {

    // значение дискриминанта
    let disc = getDiscriminant()

    // преобразует отрицательное число в скобки
    const numRes = (num) => num < 0 ? `(${num})` : num

    let x1 = roundNumber((-b + Math.sqrt(disc)) / (2 * a))
    let x2 = roundNumber((-b - Math.sqrt(disc)) / (2 * a))

    // Находит дискриминант
    function getDiscriminant() {
        let res = Math.pow(+b, 2) - (4 * +a * +c)
        return res
    }

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

        <div className={`${styles.solution} ${openSolution ? styles.solution__open : ""}`}>
            {openSolution
                ?
                <>
                    <hr/>
                    <div className={styles.box__title}>
                        <h2 className={styles.title}>
                            <em>{a == 1 || a == 0 ? "" : a && a == -1 ? "-" : a}
                                x<sup>2</sup> {+b < -1 && `- ${b.slice(1, 2)}` || b == -1 && '- ' || (b == 0 || b == 1) && '+ ' || +b > 1 && `+ ${b}`}
                                x {+c >= 0 ? `+ ${c}` : `- ${c.slice(1, 2)}`} = 0
                            </em>

                        </h2>
                    </div>
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

                        {disc > 0 &&
                        <>
                            <p>Дискриминант D > 0, уравнение имеет два действительных корня.</p>
                            <Coefficient1
                                a={a}
                                b={b}
                                disc={disc}
                                x1={x1}
                                numRes={numRes}
                            />
                            <Coefficient2
                                a={a}
                                b={b}
                                disc={disc}
                                x2={x2}
                                numRes={numRes}
                            />
                        </>
                        ||
                        disc === 0 &&
                        <>
                            <p>Дискриминант D = 0, уравнение имеет один действительный корень.</p>
                            <Coefficient1
                                a={a}
                                b={b}
                                disc={disc}
                                x1={x1}
                                numRes={numRes}
                            />
                        </>
                        || disc < 0 &&
                        <p>Дискриминант D &#60; 0, уравнение не имеет корней.</p>
                        }
                    </div>
                </>
                : ''
            }

        </div>
    );
};

export default Solution;
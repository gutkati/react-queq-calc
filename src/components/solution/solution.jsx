import React, {useState} from 'react';
import styles from './Solution.module.css'

const Solution = ({openSolution, a, b, c}) => {

    // значение дискриминанта
    let disc = getDiscriminant()
    
    function getEquation() {

    }
  // Находит дискриминант
    function getDiscriminant() {
        let res = Math.pow(+b, 2) - (4 * +a * +c)
        return res
    }

    // преобразует отрицательное число в скобки
    const numRes = (num) => num < 0 ? `(${num})` : num

    console.log(disc)

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
                        <p>D = b<sup>2</sup> – 4ac = {numRes(b)}<sup>2</sup> –
                            4·{numRes(a)}·{numRes(c)} = {disc}</p>
                        <p>{disc > 0 && 'Дискриминант D > 0, уравнение имеет два действительных корня.'
                        ||
                        disc === 0 && 'Дискриминант D = 0, уравнение имеет один действительный корень.'
                        || disc < 0 && 'Дискриминант D < 0, уравнение не имеет корней.'

                        }</p>
                        <p>
                            x1 = -b + √D = -(-5) + √1 = 1.5
                            2a 2·2

                        </p>

                        <p>
                            x2 = -b - √D = -(-5) - √1 = 1
                            2a 2·2
                        </p>

                    </div>
                </>
                : ''
            }

        </div>
    );
};

export default Solution;
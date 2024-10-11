import React from 'react';
import styles from './Solution.module.css'

const Solution = ({openSolution}) => {
    return (
        //<div className={openSolution ? styles.solution : ''}>
        <div className={`${styles.solution} ${openSolution ? styles.solution__open : ""}`}>
            {openSolution
                ?
                <>
                    <hr/>
                    <div className={styles.box__title}>
                        <h2 className={styles.title}>
                            <em>6x<sup>2</sup> + 2x + 4 = 0</em>
                        </h2>
                    </div>
                    <div className={styles.box__info}>
                        <p>Дискриминант равен:</p>
                        <p>D = b2 – 4ac = (-5)2 – 4·2·3 = 1</p>
                        <p>Дискриминант D > 0, следовательно уравнение имеет два действительных корня.</p>
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
import React, {useState} from 'react';
import styles from './SolutionForm.module.css'

const SolutionForm = ({a, b, c, openSolution, children}) => {

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
                        {children}
                    </div>
                </>
                : ''
            }
        </div>
    );
};

export default SolutionForm;
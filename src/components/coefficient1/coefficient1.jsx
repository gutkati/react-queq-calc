import React from 'react';
import styles from "../solution/Solution.module.css";

const Coefficient1 = ({a, b, disc, x1, numRes}) => {
    return (
        <div>
            <p>
                <math className={styles.coefficient}>
                    <msub>
                        <mi>x</mi>
                        <mn>1</mn>
                    </msub>
                    <mo>=</mo>

                    <mfrac>
                        <mrow>
                            <mo class={styles.font__size}>-</mo>
                            <mi class={styles.font__size}>b</mi>
                            <mo>+</mo>
                            <msqrt>
                                <mi class={`${styles.font__size} ${styles.margin__top}`}>D</mi>
                            </msqrt>
                        </mrow>
                        <mrow>
                            <mn class={styles.font__size}>2</mn>
                            <mo>·</mo>
                            <mi class={styles.font__size}>a</mi>
                        </mrow>
                    </mfrac>
                    <mo>=</mo>

                    <mfrac>
                        <mrow>
                            <mo class={styles.font__size}>-</mo>
                            <mn class={styles.font__size}>{numRes(b)}</mn>
                            <mo>+</mo>
                            <msqrt>
                                <mn class={`${styles.font__size} ${styles.margin__top}`}>{disc}</mn>
                            </msqrt>
                        </mrow>
                        <mrow>
                            <mn class={styles.font__size}>2</mn>
                            <mo>·</mo>
                            <mn class={styles.font__size}>{numRes(a)}</mn>
                        </mrow>
                    </mfrac>
                    <mo>=</mo>
                    <mn>{x1}</mn>
                </math>
            </p>

        </div>
    );
};

export default Coefficient1;
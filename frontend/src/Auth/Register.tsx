import React from 'react'

// scss import
import styles from '../scss/auth.module.scss'

function Register() {
    return (
        <div className={styles.Register}>
            <div>
                <div className={styles.font}>
                    ユーザ名
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div className={styles.font}>
                    メールアドレス
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div className={styles.font}>
                    パスワード
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className={styles.Button}>
                登録
            </div>
        </div>
    )
}

export default Register
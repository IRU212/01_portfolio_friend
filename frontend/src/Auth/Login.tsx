import React from 'react'

// scss import
import styles from '../scss/auth.module.scss'

function Login() {
    return (
        <div className={styles.Login}>
            <div>
                <div className={styles.font}>
                    ユーザ名 or メールアドレス
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
                ログイン
            </div>
        </div>
    )
}

export default Login
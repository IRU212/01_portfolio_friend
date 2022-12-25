import React, { useState } from 'react'

// scss import
import styles from '../scss/auth.module.scss'
import Login from './Login'
import Register from './Register'

// ログイン・新規登録画面のモーダルレイアウト
function AuthLayout() {

    /**
     * ログイン・新規登録画面切り替え
     * true: ログイン画面
     * false: 新規登録画面
     */
    const [IsLoginPage,setIsLoginPage] = useState<boolean>(true)

    return (
        <div className={styles.AuthLayout}>
            <div className={styles.IsLogin}>
                <div onClick={() => setIsLoginPage(true)}>
                    LOGIN
                </div>
                <div onClick={() => setIsLoginPage(false)}>
                    REGISTER
                </div>
            </div>
            <div>
                { IsLoginPage ?
                    <div>
                        <Login />
                    </div>
                    :
                    <div>
                        <Register />
                    </div>
                }
            </div>
        </div>
    )
}

export default AuthLayout
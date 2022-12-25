<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * $user User Model呼び出し
     */
    public function __construct()
    {
        $this->user = new User();
    }

    /**
     * ログイン機能
     *
     * user.id session 保存
     */
    public function store(Request $request) {

        $login_id = $this->user->where('name',$request->name)
                   ->where('password',$request->password)
                   ->first()
                   ->id;

        session()->put('login_id', $login_id);

        return session()->get('login_id');

    }


}

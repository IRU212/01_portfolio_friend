<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * $user User Model呼び出し
     */
    public function __construct()
    {
        $this->user = new User();
    }

    /**
     * ログインユーザ情報
     *
     * @return void
     */
    public function index() {

        $login_id = session()->get('login_id');

        $data = $this->user->find($login_id);

        return response()->json(
            $data,
            200
        );

    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void アカウント新規登録
     */
    public function store(Request $request) {
        
        $this->user->name = $request->name;
        $this->user->email = $request->email;
        $this->user->password = Hash::make($request->password); // パスワードハッシュ化

        // 最新user.idを取得
        $id = $this->user->latest()->pluck('id')->first();

        // 最新user.idを+1
        $login_id = $id + 1;

        session()->put('login_id',$login_id); // ログインユーザのuser.idを保存

        $this->user->save(); // 保存

    }
}

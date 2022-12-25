<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use Illuminate\Http\Request;

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

        $data = $this->user->find(1);

        return response()->json(
            $data,
            200
        );

    }

    public function store() {
        
        $this->user->name = "aaa";
        $this->user->email = "aaa@aaa";
        $this->user->password = "aaaaa";

        $this->user->save();

    }
}
              
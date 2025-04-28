<?php

namespace App\Http\Controllers;

use App\Models\Rendeles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RendelesController extends Controller
{
    public function index()
    {
        return Rendeles::all();
    }

   
    public function store(Request $request)
    { 
        $validator = Validator::make($request->all(),
        [
            'Termek' => 'required',
            'Elado' => 'required',
            'Vasarlo' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json(['message' => 'Fontos adat hiányzik'], 400);
        }

        $rendelesek = Rendeles::create($request->all());
        return response()->json(['id' => $rendelesek->id],202);
    }

    
    public function getById($id)
    {
        $rendelesek = Rendeles::find($id);
        if(is_null($rendelesek))
        {
            return response()->json(['Hiba:'=>'A rendelés nem található!'],404);
        }
        
        return response()->json($rendelesek,201);
    }

    public function delete($id)
    {
        $rendelesek = Rendeles::where('id','=',$id);
        if($rendelesek->exists())
        {
            $rendelesek->delete();
            return response('A rendelés törölve lett',204);
        }
        return response('A rendelés nem létezik!',404);
    }


}

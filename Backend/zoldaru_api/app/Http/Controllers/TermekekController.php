<?php

namespace App\Http\Controllers;

use App\Models\Termekek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TermekekController extends Controller
{
    public function index()
    {
        return Termekek::all();
    }

   
    public function store(Request $request)
    { 
        $validator = Validator::make($request->all(),
        [
            'termek_nev' => 'required',
            'ar'=> 'required',
            'kategoria' => 'required',
            'szarmazasi_orszag' => 'required',
            'minoseg' => 'required'

        ]);

        if($validator->fails())
        {
            return response()->json(['message' => 'Fontos adat hiányzik'], 400);
        }

        $termekek = Termekek::create($request->all());
        return response()->json(['id' => $termekek->id],202);
    }

    
    public function update(Request $request, $id)
    {
        $termekek = Termekek::find($id);
        if(is_null($termekek))
                return response()->json(['Hiba:'=>'A termék nem létezik!'],404);
        
        $validator = Validator::make($request->all(),
        [
            'termek_nev' => 'required',
            'kategoria' => 'required'
        ]
        );
        if($validator->fails()){
            return response()->json(['Hiba' => 'Fontos adatok hiányoznak!'],402);
        }

        $termekek -> update($request->all());
        return response()->json(['Következő id-jű Termék adatai megváltoztak' => $termekek->id],201);
    }

    
    public function delete($id)
    {
        $termekek = Termekek::where('id','=',$id);
        if($termekek->exists())
        {
            $termekek->delete();
            return response('A termék törölve lett',204);
        }
        return response('A termék nem létezik!',404);
    }

    public function getById($id)
    {
        $termekek = Termekek::find($id);
        if(is_null($termekek))
        {
            return response()->json(['Hiba:'=>'A termék nem található!'],404);
        }
        
        return response()->json($termekek,201);
    }


}

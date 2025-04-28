<?php

namespace App\Http\Controllers;

use App\Models\Hirdetes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HirdetesController extends Controller
{
    public function index()
    {
        return Hirdetes::all();
    }

   
    public function store(Request $request)
    { 
        $validator = Validator::make($request->all(),
        [
            'Felhasznalok'=> 'required',
            'Termek' => 'required',
            'termek_egysege' => 'required',
            'Termek_mennyisege'=> 'required',
            'brutto_egysegar' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json(['message' => 'Fontos adat hiányzik'], 400);
        }

        $hirdetesek = Hirdetes::create($request->all());
        return response()->json(['id' => $hirdetesek->id],202);
    }

    
    public function update(Request $request, $id)
    {
        $hirdetesek = Hirdetes::find($id);
        if(is_null($hirdetesek))
                return response()->json(['Hiba:'=>'A hirdetés nem létezik!'],404);
        
        $validator = Validator::make($request->all(),
        [
            'Felhasznalok'=> 'required',
            'Termek' => 'required',
            'termek_egysege' => 'required',
            'brutto_egysegar' => 'required'
        ]
        );
        if($validator->fails()){
            return response()->json(['Hiba' => 'Fontos adatok hiányoznak!'],402);
        }

        $hirdetesek -> update($request->all());
        return response()->json(['Következő id-jű Hirdetés adatai megváltoztak' => $hirdetesek->id],201);
    }

    
    public function delete($id)
    {
        $hirdetesek = Hirdetes::where('id','=',$id);
        if($hirdetesek->exists())
        {
            $hirdetesek->delete();
            return response('A hirdetés törölve lett',204);
        }
        return response('A hirdetés nem létezik!',404);
    }

    public function getById($id)
    {
        $hirdetesek = Hirdetes::find($id);
        if(is_null($hirdetesek))
        {
            return response()->json(['Hiba:'=>'A hirdetés nem található!'],404);
        }
        
        return response()->json($hirdetesek,201);
    }


    public function getMoreExpensive($brutto_egysegar){
        $hirdetesek = Hirdetes::where('brutto_egysegar', '>', $brutto_egysegar);
        if($hirdetesek->exists())
            return $hirdetesek->get();
        else
            return response("Nem található az adott árnál drágább/nagyobb árú hirdetés!", 402);
        
    }

    public function getCheaper($brutto_egysegar){
        $hirdetesek = Hirdetes::where('brutto_egysegar', '<', $brutto_egysegar);
        if($hirdetesek->exists())
            return $hirdetesek->get();
        else
            return response("Nem található az adott árnál olcsóbb/kissebb árú hirdetés!", 402);
    }
}

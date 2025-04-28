<?php

namespace App\Http\Controllers;
use App\Models\Felhasznalok;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class FelhasznalokController extends Controller
{
    
    public function index()
    {
        return Felhasznalok::all();
    }

   
    public function store(Request $request)
    { 
        $validator = Validator::make($request->all(),
        [
            'nev_v_cegnev' => 'required',
            'adoszam' => 'required',
            'felhasznalo_tipus' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json(['message' => 'Fontos adat hiányzik'], 400);
        }

        $felhasznalok = Felhasznalok::create($request->all());
        return response()->json(['id' => $felhasznalok->id],202);
    }

    
    public function update(Request $request, $id)
    {
        $felhasznalok = Felhasznalok::find($id);
        if(is_null($felhasznalok))
                return response()->json(['Hiba:'=>'A felhasználó nem létezik!'],404);
        
        $validator = Validator::make($request->all(),
        [
            'nev_v_cegnev' => 'required',
            'adoszam' => 'required',
            'felhasznalo_tipus' => 'required'
        ]
        );
        if($validator->fails()){
            return response()->json(['Hiba' => 'Fontos adatok hiányoznak!'],402);
        }

        $felhasznalok -> update($request->all());
        return response()->json(['Következő id-jű Felhasználó adatai megváltoztak' => $felhasznalok->id],201);
    }

    
    public function delete($id)
    {
        $felhasznalok = Felhasznalok::where('id','=',$id);
        if($felhasznalok->exists())
        {
            $felhasznalok->delete();
            return response('A felhasználó törölve lett!',204);
        }
        return response('A felhasználó nem létezik!',404);
    }

    public function getById($id)
    {
        $felhasznalok = Felhasznalok::find($id);
        if(is_null($felhasznalok))
        {
            return response()->json(['Hiba:'=>'A felhasználó nem található!'],404);
        }
        
        return response()->json($felhasznalok,201);
    }

}

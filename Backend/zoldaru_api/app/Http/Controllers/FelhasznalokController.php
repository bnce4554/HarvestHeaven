<?php

namespace App\Http\Controllers;
use App\Models\Felhasznalok;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

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
            'nev' => 'required',
            'adoszam' => 'required',
            'felhasznaloTipus' => 'required',
            'jelszo' => 'required',
            'telefonszam' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json(['message' => 'Fontos adat hiányzik'], 400);
        }
        $password = Hash::make($request->jelszo);
        $felhasznalok = Felhasznalok::create([
            'nev'=>$request->nev,
            'adoszam'=>$request->adoszam,
            'telefonszam'=>$request->telefonszam,
            'felhasznaloTipus'=>$request->felhasznaloTipus,
            'jelszo'=>$password

        ]);
        return response()->json(['id' => $felhasznalok->id],202);
    }
    

    public function login(Request $request){
        $existingUser = Felhasznalok::where('nev','=',$request->nev)->first();
        if (!is_null($existingUser)) {
            
            if (Hash::check($request->jelszo, $existingUser->jelszo)) {
                return $existingUser;
            }
        }
    }

    public function update(Request $request, $id)
    {
        $felhasznalok = Felhasznalok::find($id);
        if(is_null($felhasznalok))
                return response()->json(['Hiba:'=>'A felhasználó nem létezik!'],404);
        


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

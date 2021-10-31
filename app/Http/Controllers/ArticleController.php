<?php

namespace App\Http\Controllers;

Use Log;
use App\Models\Article;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    public function getAll(){
      $articles = DB::table('articles')->get();

      return response()->json($articles, 200);
    }
   
    public function create(Request $request){
      $data['topic'] = $request['topic'];
      $data['description'] = $request['description'];
      $data['categorie'] = $request['categorie'];
      Article::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Article::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Article::find($id);
    
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
      $data['topic'] = $request['topic'];
      $data['description'] = $request['description'];
      $data['categorie'] = $request['categorie'];
      Article::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
    
    public function search(Request $request)
    {
      
        $input = $request->all();
        $articles=Article::query();
        if($request->get('search')!=""){
            $articles = $articles->where("topic", "LIKE", "%{$request->get('search')}%");
        }
          $articles = $articles->get();
       
        return response()->json($articles);
    }
}

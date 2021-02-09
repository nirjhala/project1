<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Model\Instruction;
use App\Model\School;
use Illuminate\Http\Request;

class InstructionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, School $school)
    {
        $limit = $request->limit ?: 10;
        $query = Instruction::where('user_id', $school->uid);

        if (!empty($request->s)) {
            $s = $request->s;
            $query->where(function ($q) use ($s) {
                $q->where('title', 'LIKE', "%{$s}%")
                ->orWhere('description', 'LIKE', "%{$s}%");
            });
        }

        $instructions = $query->paginate($limit);

        return response()->json($instructions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, School $school)
    {
        $request->validate([
            'record'                => 'required|array',
            'record.title'          => 'required',
            'record.description'    => 'required',
        ]);

        $instruction = new Instruction($request->record);
        $instruction->user_id = $school->uid;
        $instruction->save();

        return response()->json([
            'message'   => 'Success! Record has been saved.',
            'data'      => $instruction
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Instruction  $instruction
     * @return \Illuminate\Http\Response
     */
    public function show($school, Instruction $instruction)
    {
        return response()->json($instruction);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Instruction  $instruction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school, $instruction_id)
    {
        $request->validate([
            'record'                => 'required|array',
            'record.title'          => 'required',
            'record.description'    => 'required',
        ]);
        
        $instruction = Instruction::findOrFail($instruction_id);
        $instruction->fill($request->record);
        $instruction->user_id = $school->uid;
        $instruction->save();

        return response()->json([
            'message'   => 'Success! Record has been updated.',
            'data'      => $instruction
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Instruction  $instruction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Instruction $instruction)
    {
        //
    }

    public function remove(Request $request)
    {
        Instruction::whereIn('id', $request->ids)->delete();

        return response()->json([
            'message'   => 'Selected record(s) have been deleted.'
        ]);
    }
}

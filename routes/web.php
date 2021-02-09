<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('get-password', function () {
    return bcrypt('admin123');
});

Route::group(['prefix' => 'invoice', 'as' => 'invoice.'], function () {
    Route::get('purchase/{purchase}', 'PurchaseController@invoice')->name('purchase');
    Route::get('sale/{sale}', 'SaleController@invoice')->name('sale');
    Route::get('receipt/{receipt}', 'ReceiptController@invoice')->name('receipt');
    Route::get('payment/{payment}', 'PaymentController@invoice')->name('payment');
    Route::get('credit-note/{credit_note}', 'CreditNoteController@invoice')->name('credit_note');
    Route::get('debit-note/{debit_note}', 'DebitNoteController@invoice')->name('debit_note');
});

Route::get('get-barcode', function () {
    $imageSrc = 'data:image/png;base64,'.DNS1D::getBarcodePNG('A1234567890A', 'C39', 1, 70);
    return '<img src="' . $imageSrc . '" alt="barcode"   />';
});

Route::get('/{any}', function () {
    return view('layouts.master');
})->where('any', '.*');

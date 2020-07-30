package com.ionicframework.customdialog;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CustomDialog extends Plugin {

    @PluginMethod
    public void show(PluginCall call) {
        String message = call.getString("message");

        AlertDialog alertDialog = new AlertDialog.Builder(this.getContext()).create();

        alertDialog.setTitle("Alert!");
        alertDialog.setMessage(message);
        alertDialog.setIcon(android.R.drawable.ic_dialog_alert);

        alertDialog.setButton(Dialog.BUTTON_POSITIVE,"OK", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();
            }
        });

        alertDialog.show();



        JSObject ret = new JSObject();
        ret.put("message", message);
        call.success(ret);
    }
}

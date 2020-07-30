package com.ionicframework.customdialog;

import android.content.Context;
import android.widget.Toast;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CustomDialog extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        Context context = this.getContext();
        CharSequence text = "Hello toast!" + value;
        int duration = Toast.LENGTH_SHORT;

        Toast toast = Toast.makeText(context, text, duration);
        toast.show();

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}

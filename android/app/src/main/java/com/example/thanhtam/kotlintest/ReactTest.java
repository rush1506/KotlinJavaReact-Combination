package com.example.thanhtam.kotlintest;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

import java.io.File;

/**
 * Created by thanhtam on 13/06/2017.
 */

public class ReactTest extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    public static final int OVERLAY_PERMISSION_REQ_CODE = 102;

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    private final String BundleFilePath = "/sdcard/index.android.bundle";
    private final String JSMainModuleName = "index.android";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final String eventType = getEvent();
        final String reactBundleUrl = getReactUrlFrom(eventType);
        final String moduleName = getModuleName(); //default
        //"https://drive.google.com/uc?export=download&id=0B8J07vaKU8uqb0psWVowUHpWMzA"
        Ion.with(getBaseContext())
                .load(reactBundleUrl)
                .write(new File(BundleFilePath))
                .setCallback(new FutureCallback<File>() {
                    @Override
                    public void onCompleted(Exception e, File file) {
                        // download done...
                        // do stuff with the File or error

                        mReactRootView = new ReactRootView(getApplicationContext());
                        mReactInstanceManager = ReactInstanceManager.builder()
                                .setApplication(getApplication())
                                .setJSBundleFile(BundleFilePath)
                                .setJSMainModuleName(JSMainModuleName)
                                .addPackage(new MainReactPackage())
                                .setUseDeveloperSupport(BuildConfig.DEBUG)
                                .setInitialLifecycleState(LifecycleState.RESUMED)
                                .build();
                        mReactRootView.startReactApplication(mReactInstanceManager,
                                moduleName, null);

                        setContentView(mReactRootView);
                        findViews();
                    }
                });

    }

    private String getModuleName() {
        return "HelloWorld";
    }

    private String getReactUrlFrom(String eventType) {
        return "https://drive.google.com/uc?export=download&id=0B8J07vaKU8uqb0psWVowUHpWMzA";
    }

    private String getEvent() {
        return null;
    }


    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    private void findViews() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                }
            }
        }
    }
    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}


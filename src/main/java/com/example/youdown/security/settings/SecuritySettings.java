package com.example.youdown.security.settings;

public class SecuritySettings {
    public final static String[] YOUTUBE_MEDIA_FILE_DOWNLOADER_API = {
            "/media/download/video-with-audio",
            "/media/download/audio",
            "/media/download/video",
            "/media/download/merged-audio-with-video",
            "/media/download/video-flux"
    };

    public final static String[] YOUTUBE_PARSED_JSON_DATA_SENDER = {
            "/json/downloader/all",
            "/json/downloader/playlist",
            "/json/downloader/channel"
    };

    public final static String[] ALLOW_ERROR_PAGES_LIST = {
            "/error/**"
    };

    public final static String[] LOGIN_REGISTER_REQUEST_LIST = {
            "/login",
            "/register",
            "/validate-jwt-token"
    };

    public final static String[] AUTH_TEST_LIST = {
            "/api/test/all",
            "/api/test/user",
            "/api/test/admin"
    };
}


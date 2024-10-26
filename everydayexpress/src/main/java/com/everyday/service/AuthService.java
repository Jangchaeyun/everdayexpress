package com.everyday.service;

import com.everyday.response.SignupRequest;

public interface AuthService {
    String createUser(SignupRequest req);
}

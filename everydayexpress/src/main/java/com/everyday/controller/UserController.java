package com.everyday.controller;

import com.everyday.modal.User;
import com.everyday.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/api/users/profile")
    public ResponseEntity<User> createUserHandler(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        System.out.println("jwt --- " + jwt);
        User user = userService.findUserByJwtToken(jwt);

        return ResponseEntity.ok(user);
    }
}

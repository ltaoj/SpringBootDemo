package org.springboot.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by ltaoj on 2017/10/21.
 */
@Controller
public class Hello2Controller {
    @RequestMapping(value = "/hello")
    public String hello() {
        return "index";
    }
}

module.exports = app =>{
    const customers = require("../controllers/controller.js");

    // 데이터 추가
    app.post("/member", customers.create);

    // 전체 조회 
    app.get("/member", customers.findAll);

    // id로 조회
    app.get("/member/:customerId", customers.findOne);

    // id로 수정
    app.put("/member/:customerId", customers.update);

    // id로 삭제
    app.delete("/member/:customerId", customers.delete);

    // 전체 삭제
    app.delete("/member", customers.deleteAll);

};
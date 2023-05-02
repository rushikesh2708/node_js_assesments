const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from tbl_info", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO tbl_info SET ?", data, (error, result, fields) => {
    if (error) throw error;
    resp.send(result);
  });
});

app.put("/:id", (req, resp) => {
  const data = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.params.id,
  ];
  con.query(
    "UPDATE tbl_info SET name = ?,email =?,phone = ?,address where id = ?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      resp.send(result);
    }
  );
});

app.delete("/:id", (req, resp) => {
  con.query(
    "DELETE FROM tbl_info WHERE id =" + req.params.id,
    (error, result) => {
      if (error) throw error;
      resp.send(result);
    }
  );
});

app.listen(5000);

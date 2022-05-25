const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const SECRET = 'tfgmanu'
const app = express();

app.use(express.json());


const connection = mysql.createPool({
  password: 'Your database',
  user: 'Your database',
  database: 'Your database',
  host: 'Your database',
  port: 3306,
  multipleStatements: true,
}) 


app.get('/', (req, res, next) => {
    res.send('This is my api');
});

app.use('/api', (req, res, next) => {
    res.json({ test: 'testeando'});
});


app.get('/user/', validateToken, (req, res) => {
    
    const sql = `SELECT * FROM users WHERE id_user=${req.id}`;
  
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
  });

app.get('/login/:username/:password', async(req, res) => {
    const { username } = req.params;
    const { password } = req.params;
    const sql = `SELECT id_user, username, pasword FROM users WHERE username= '${username}' AND pasword= '${password}'`
    loginIn = connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
          
          console.log(results[0])
        //   console.log(results[0].id_user)
          const accessToken = generateAccessToken(results[0].id_user);
          console.log(accessToken)
          if(results[0].username == username && results[0].pasword == password) {
            res.header(accessToken).json({
                token: accessToken,
                login: results[0]
            });
          }
        } else {
          res.send('Not result');
        }
      });
    
  });

app.post("/registering", async(req, res) => {
    // console.log(req.body)
    const sql = `INSERT INTO users  (name, second_name, username, email, pasword) VALUES ('${req.body.name}', '${req.body.second_name}', '${req.body.username}', '${req.body.email}', '${req.body.password}' )`
    // [req.body.name, req.body.second_name, req.body.username, req.body.email, req.body.password],
    try {
        connection.query(sql,  (error, results) => {
            if (error) throw error;
            if (results) {
                console.log('User registered')
                res.json(results);
            //   console.log(results)
            //   console.log(results[0])
            } else {
              res.send('Not result');
            }
        });
    } catch (err) {
        console.log(err.message);
    }
})




app.get("/profile", validateToken, async(req, res) => {
    
    const sql = `SELECT second_name, name, username, pasword, email from users WHERE id_user = '${req.id}'`
    try {
        connection.query(sql,  (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                // console.log('I reach registering')
                console.log(results)
                res.json(results[0]);
            }
        })
        // console.log(test.rows[0])
    } catch (err) {
        console.log(err.message);
    }
  
})

app.post("/coords", validateToken, async(req, res) => {
    // console.log("Llego")
    console.log(req.body.latitud)
    const sql = `INSERT INTO coordenadas (latitud, longitud, time, id_user) VALUES ('${req.body.latitud}', '${req.body.longitud}', '${req.body.time}', '${req.id}')`
    try {
        connection.query(sql,  (error, results) => {
            
            if (error) throw error;
            if (results) {
                console.log('Coordenas guardadas')
                res.json(results);
                // console.log(results)
            } else {
              res.send('Not result');
            }
        });
    } catch (err) {
        console.log("xd")
        console.log(err.message);
    }


})

app.get("/userCoords", validateToken, async(req, res) => {
  console.log("Llego al GET")
  const sql = `SELECT * FROM coordenadas WHERE id_user='${req.id}'`
  try {
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results) {
        console.log('Coordenadas obtenidas')
        res.json(results);
        // console.log(results)
    } else {
      res.send('Not result');
    }
    })

  } catch (err) {
      console.log(err.message);
  }



})

//Funciona      
app.get("/userTrayectos", validateToken, async(req, res) => {
  console.log("Llego al GET")
  const sql = `SELECT * FROM trayectos WHERE id_user='${req.id}'`
  try {
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results) {
        console.log('Trayectos obtenidos')
        res.json(results);
        // console.log(results)
    } else {
      res.send('Not result');
    }
    })
  } catch (err) {
      console.log(err.message);
  }
})




// app.post('/updateProfile', validateToken, async(req, res) => {
//   console.log("llego jeje")
//   const sql = `UPDATE users SET name='${req.body.name}', second_name='${req.body.second_name}', username='${req.body.username}', email='${req.body.email}', pasword='${req.body.password}' WHERE id_user='${req.id}' `
//   try {
//     connection.query(sql, (error, results) => {
//       if (error) throw error;
//       if (results) {
//         console.log('Perfil modificado')
//         res.json(results);
//         // console.log(results)
//     } else {
//       res.send('Not result');
//     }
//     })
//   } catch (err) {
    
//   }
// })


app.delete('/deleteUser', validateToken, async(req, res) => {
  console.log("Deleting user")
  const sql = `DELETE FROM users WHERE id_user='${req.id}' `
  try {
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results) {
        console.log('Usuario borrado')
        res.json(results);
    } else {
      res.send('Not result');
    }
    })
  } catch (err) {
    console.log(err.message);
  }
})


function generateAccessToken(id) {
    return jwt.sign(id, SECRET)
}

function validateToken(req, res, next) {
    const accessToken = req.headers['token'];
    console.log("Validate token:" + accessToken)
    // console.log(accessToken)
    if(!accessToken) res.send('Access denied')

    jwt.verify(accessToken, SECRET, (err, id) => {
        if(err) {
            res.send('Token expired o incorrecto')
        }else{
            req.id = id
            console.log("El id del usuario al cual pertenece el token es: " + id)
            next();
        }
    })

}

  connection.getConnection(error => {
    if (error) throw error;
    console.log('Database server running!');
  });
  
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server running')
})




// const connection = mysql.createPool({
//   password: 'flmGyLnzbV',
//   user: 'sql11491314',
//   database: 'sql11491314',
//   host: 'sql11.freemysqlhosting.net',
//   port: 3306,
//   multipleStatements: true,
// }) 

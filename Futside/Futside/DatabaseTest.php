<?php

use PHPUnit\Framework\TestCase;

class DatabaseTest extends TestCase
{
    private $pdo;
    private $mysqli;

    protected function setUp(): void
    {
        $localhost = 'localhost';
        $user = 'root';
        $passw = "";
        $banco = "futside";

        // Configura a conexão PDO
        $this->pdo = new PDO("mysql:dbname=".$banco.";host=".$localhost, $user, $passw);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Configura a conexão MySQLi
        $this->mysqli = new mysqli($localhost, $user, $passw, $banco);
        if ($this->mysqli->connect_error) {
            die("Falha na conexão MySQLi: " . $this->mysqli->connect_error);
        }
    }

    public function testMysqliConnection()
    {
        // Executa uma consulta com MySQLi
        $sql = $this->mysqli->query("SELECT * FROM usuarios");
        $this->assertGreaterThan(0, $sql->num_rows, "Não há registros em MySQLi.");
    }

    public function testPdoConnection()
    {
        // Executa uma consulta com PDO
        $sql = $this->pdo->query("SELECT * FROM usuarios");
        $this->assertGreaterThan(0, $sql->rowCount(), "Não há registros no PDO.");
    }

    protected function tearDown(): void
    {
        $this->pdo = null;
        $this->mysqli->close();
    }
}

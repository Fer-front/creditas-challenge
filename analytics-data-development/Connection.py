import sqlite3
from sqlite3 import Error

class Connection():

    def criar_conexao(db_file):
        """ Cria uma conexão no banco de dados no SQLite
        :param db_file: Nome do banco de dados
        """
        conn = None
        try:
            conn = sqlite3.connect(db_file)
            print('Banco de Dados criado')
        except Error as e:
            print(e)
        return conn

    def executar(self, conn, sql):
        """ Executa um comando com um cursor
        :param conn: Objeto de conexão
        :param create_table_sql: o comando SQL
        """
        try:
            c = conn.cursor()
            c.execute(sql)
        except Error as e:
            print(e)

if __name__ == '__main__':
    connection = Connection('creditas.db')

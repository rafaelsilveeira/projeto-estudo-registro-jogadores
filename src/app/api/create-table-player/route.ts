import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Jogador ( 
        id_jogador INT PRIMARY KEY,  
        nome_completo INT,  
        numero INT,  
        posicao INT,  
        salario INT,  
        nome_camisa INT,  
        id_clube INT,
        );

        ALTER TABLE Jogador ADD FOREIGN KEY(id_clube) REFERENCES Clube (id_clube)
        `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors()); 
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('Erro ao conectar com o MongoDB:', err));

const AgendamentoSchema = new mongoose.Schema({
  cliente: {
    type: String,
    required: true,
  },
  servico: {
    type: String,
    required: true,
  },
  dataHora: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: 'agendado', 
  },
});

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema);

app.post('/api/agendamentos', async (req, res) => {
  try {
    const { cliente, servico, dataHora } = req.body;

    const novoAgendamento = new Agendamento({
      cliente,
      servico,
      dataHora,
    });

    await novoAgendamento.save();
    res.status(201).json(novoAgendamento); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/agendamentos', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find(); 
    res.json(agendamentos); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

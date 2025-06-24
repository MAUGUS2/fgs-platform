#!/usr/bin/env node

/**
 * 🧪 Workspace Validation Script
 * 
 * Este script valida se a configuração do monorepo está correta
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Validando configuração do FGS Platform Monorepo...\n');

// ✅ 1. Verificar package.json principal
try {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  console.log('✅ package.json principal encontrado');
  console.log(`   Nome: ${packageJson.name}`);
  console.log(`   Versão: ${packageJson.version}`);
  console.log(`   Workspaces: ${packageJson.workspaces?.join(', ') || 'Não configurado'}`);
} catch (error) {
  console.log('❌ package.json principal não encontrado ou inválido');
  process.exit(1);
}

// ✅ 2. Verificar pnpm-workspace.yaml
try {
  const workspaceContent = fs.readFileSync('./pnpm-workspace.yaml', 'utf8');
  console.log('✅ pnpm-workspace.yaml encontrado');
} catch (error) {
  console.log('❌ pnpm-workspace.yaml não encontrado');
  process.exit(1);
}

// ✅ 3. Verificar estrutura de diretórios
const expectedDirs = [
  'apps',
  'apps/marketing', 
  'apps/dashboard',
  'packages',
  'packages/ui',
  'packages/api', 
  'packages/db',
  'packages/config'
];

expectedDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ Diretório ${dir}/ existe`);
  } else {
    console.log(`❌ Diretório ${dir}/ não encontrado`);
  }
});

console.log('\n🎉 Validação da estrutura básica completa!');
console.log('\n📝 Próximos passos:');
console.log('   1. Executar: pnpm install');
console.log('   2. Criar packages individuais');
console.log('   3. Configurar dependências entre packages');
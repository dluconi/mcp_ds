const fs = require('fs');
const path = 'c:\\git\\mcp_ws\\src\\backend\\mcp_server.py';
let content = fs.readFileSync(path, 'utf-8');
let lines = content.split(/\r?\n/);

let newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.includes('INSIDER_PARTNER_NAME = get_required_env')) continue;
    if (line.includes('INSIDER_API_KEY_UCD = get_required_env')) continue;
    if (line.includes('INSIDER_API_KEY_WHATSAPP = get_required_env')) continue;
    
    if (line.includes('"unification.useinsider.com", "analytics.api.useinsider.com"')) {
        line = line.replace(', "unification.useinsider.com", "analytics.api.useinsider.com"', '');
    }
    
    if (line.startsWith('class InsiderClient:')) {
        skip = true;
    }
    
    if (skip) {
        if (line.startsWith('insider_client = InsiderClient()')) {
            skip = false;
        }
        continue;
    }
    
    if (line.startsWith('@mcp.tool()')) {
        if (i + 1 < lines.length && lines[i+1].includes('async def insider_')) {
            skip = true;
            continue;
        }
    }
    
    if (skip) {
        if (line.startsWith('if __name__ == "__main__":')) {
            skip = false;
            newLines.push(line);
        }
        continue;
    }
    
    newLines.push(line);
}

while(newLines.length > 2 && newLines[newLines.length - 2].trim() === '' && newLines[newLines.length - 3].trim() === '') {
    newLines.splice(newLines.length - 2, 1);
}

fs.writeFileSync(path, newLines.join('\n'), 'utf-8');
console.log('Done!');

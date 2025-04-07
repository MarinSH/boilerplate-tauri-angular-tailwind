#[tauri::command]
fn greet(name: &str) -> String {
    format!("Bonjour, {}! Vous avez appelé Rust depuis Angular!", name)
}

fn main() {
    tauri::Builder::default()
        .setup(|_app| Ok(()))
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("Une erreur s'est produite lors de l'exécution de l'application");
}
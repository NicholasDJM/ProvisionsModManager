use hex;
fn main() {
    let data = "4ªU";
    println!("{}", data);
    let hex_string = hex::encode(data);
    println!("{}", hex_string);
    let something = hex::decode("3412AA55");
    println!("{:?}", something);
    assert_eq!(
        hex::decode("3412AA55"),
        Ok("4ªU".to_owned().into_bytes())
    );
}

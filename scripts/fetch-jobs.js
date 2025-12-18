import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
console.error("❌ Missing Supabase environment variables");
process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
console.log("✅ Supabase client initialized");

const { error } = await supabase
.from("internships")
.insert([
{
title: "Workflow Test Internship",
company: "MyIntern",
location: "Remote",
url: "https://example.com"
}
]);

if (error) {
console.error("❌ Supabase insert failed:", error.message);
process.exit(1);
}

console.log("✅ Test internship inserted");
}

run();

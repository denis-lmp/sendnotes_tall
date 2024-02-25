<?php

namespace App\Console\Commands;

use App\Jobs\SendEmail;
use App\Models\Note;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendScheduledNotes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-scheduled-notes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Send scheduled notes
        $this->info('Sending scheduled notes...');

        $now = Carbon::now();

        $notes = Note:: where('is_published', true)
            ->where('send_date', '<=', $now->toDateString())
            ->get();

        $notesCount = $notes->count();
        $this->info("Found {$notesCount} notes to send.");

        foreach ($notes as $note) {
            // Send note
            SendEmail::dispatch($note);
        }
    }
}
